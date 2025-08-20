type userInf = {
  id: number;
  username: string;
  fullName: string;
  email: string;
};

type adminInf = userInf & {
  role: string;
  lastLogin: Date;
};

export type { userInf, adminInf };
