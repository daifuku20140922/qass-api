export const UserStatus = {
  Enrolled: 'enrolled',
  Retired: 'retired',
  Suspended: 'suspended',
} as const;

export type UserStatus = typeof UserStatus[keyof typeof UserStatus];

const UserStatuses: UserStatus[] = [
  UserStatus.Enrolled,
  UserStatus.Retired,
  UserStatus.Suspended,
];

export function isUserStatus(status: string): status is UserStatus {
  return UserStatuses.some((x) => x === status);
}
