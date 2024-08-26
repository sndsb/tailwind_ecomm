const ROOTS = {
    AUTH: "/auth",
    MAIN: "/",
  };
  
  export const paths = {
    page404: "/404",
  
    auth: {
      login: `${ROOTS.AUTH}/login`,
      signUp: `${ROOTS.AUTH}/sign-up`,
    },
  
    home: {
      home: ROOTS.MAIN,
    },
   
  };
  