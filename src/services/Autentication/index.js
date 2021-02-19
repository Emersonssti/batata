export async function sendCheckPassword(email, password) {
    const body = {
      email: email,
      password: password,
    };
  
    try {    
      return { status: true, body: body };
    } catch (error) {
      if (error.response) {
        return {
          status: false,
          message: `Ops, você nao tem permissão para acessar. Tente novamente!`,
        };
      }
  
      if (error.request) {
        return {
          status: false,
          message: `Ops, ocorreu um erro. Tente novamente!`,
        };
      }
  
      return { status: false, message: `Ops, ocorreu um erro. Tente novamente!` };
    }
  }