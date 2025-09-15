export function isOverheating(temp: number): boolean {
  return temp > 70;
}

export function isStable(temp: number): boolean {
  return temp > 40 && temp < 70
}
