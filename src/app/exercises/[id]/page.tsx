import { notFound } from "next/navigation";
import { getExerciseById, getAllExercises } from "@/lib/exercises";
import ExerciseDetail from "@/components/ExerciseDetail";

export async function generateStaticParams() {
  const exercises = getAllExercises();
  return exercises.map((ex) => ({ id: ex.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exercise = getExerciseById(id);
  if (!exercise) return { title: "Not Found — FitBase" };
  return {
    title: `${exercise.name} — FitBase`,
    description: exercise.instructions.en?.slice(0, 160),
  };
}

export default async function ExerciseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exercise = getExerciseById(id);

  if (!exercise) notFound();

  return <ExerciseDetail exercise={exercise} />;
}
