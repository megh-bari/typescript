interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string; // optional

  //   startTrial: () => string;

  startTrial(): string; // best
  discountCode(couponName: string, value: number): number;
}

// re-opening of the interface
interface User {
  githubToken: string;
}

//inherits

interface Admin extends User {
  role: "admin" | "ta" | "learners";
}

const megh: Admin = {
  dbId: 1234,
  email: "abc@abc.abc",
  userId: 123,
  role: "admin",
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },
  discountCode: (name: "idk", off: 10) => {
    return 10;
  },
};
