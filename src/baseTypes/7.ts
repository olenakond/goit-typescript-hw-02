/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunnday",
}

function isWeekend(day: string): boolean {
  if (day === "saturday" || "sunnday") {
    return true;
  }
  return false;
}

isWeekend(Days.saturday);
