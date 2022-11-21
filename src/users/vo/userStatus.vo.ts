export const UserStatus = {
  Enrolled: 'enrolled',
  Retired: 'retired',
  Suspended: 'suspended',
} as const;

export type UserStatus = typeof UserStatus[keyof typeof UserStatus];
