import exercisesData from "@/data/exercises.json";

export interface Exercise {
  id: string;
  name: string;
  category: string;
  body_part: string;
  equipment: string;
  instructions: Record<string, string>;
  instruction_steps: Record<string, string[]>;
  muscle_group: string;
  secondary_muscles: string[];
  target: string;
  image: string;
  video_url: string;
  attribution: string;
}

const exercises = exercisesData as Exercise[];

/** Lightweight shape for list/card rendering — excludes the heavy multilingual
 *  instruction text so it can cross the server→client boundary cheaply. */
export interface ExerciseSummary {
  id: string;
  name: string;
  body_part: string;
  equipment: string;
  target: string;
  video_url: string;
  image: string;
}

function toSummary(e: Exercise): ExerciseSummary {
  return {
    id: e.id,
    name: e.name,
    body_part: e.body_part,
    equipment: e.equipment,
    target: e.target,
    video_url: e.video_url,
    image: e.image,
  };
}

export function getAllExercises(): Exercise[] {
  return exercises;
}

export function getAllSummaries(): ExerciseSummary[] {
  return exercises.map(toSummary);
}

export function getBodyPartCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const e of exercises) {
    counts[e.body_part] = (counts[e.body_part] || 0) + 1;
  }
  return counts;
}

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((e) => e.id === id);
}

export function getFilteredSummaries(filters: {
  bodyPart?: string;
  equipment?: string;
  target?: string;
  search?: string;
}): ExerciseSummary[] {
  const q = filters.search?.toLowerCase();
  return exercises
    .filter((e) => {
      if (filters.bodyPart && e.body_part !== filters.bodyPart) return false;
      if (filters.equipment && e.equipment !== filters.equipment) return false;
      if (filters.target && e.target !== filters.target) return false;
      if (q && !e.name.toLowerCase().includes(q)) return false;
      return true;
    })
    .map(toSummary);
}

export function getMediaUrl(path: string): string {
  return `/${path}`;
}
