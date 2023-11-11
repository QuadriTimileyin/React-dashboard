export const useAuth = () => {
  
  
    const isLoggedIn = async ()=> {
        const token = localStorage.getItem("token");

     
      return token != null;
    };
  
    return {

      isLoggedIn,
  
    };
  };
  