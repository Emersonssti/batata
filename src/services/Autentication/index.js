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

export async function sendChangePassword(password) {
  const body = {
    password: password,
  };

  try {
    return { status: true, body: body };
  } catch (error) {
    if (error.response) {
      return {
        status: false,
        message: `Ops, ocorreu um erro. Tente novamente!`,
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


export async function sendForgotPassword(email) {
  const body = { email: email };

  try {
    return { status: true, body: body };
  } catch (error) {
    if (error.response) {
      return {
        status: false,
        message: `Ops, ocorreu um erro. Tente novamente!`,
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

export async function getMergeAccount(hash) {
  const body = { hash: hash }
  try {
    return { status: true, body: body };
  } catch (error) {
    if (error.response) {
      return {
        status: false,
        message: `Ops, ocorreu um erro ao ativar seu produto. Tente novamente!`,
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

export async function sendMergeAccount(password, cpf, email) {
  
  const body = {
    password: password,
    cpf: cpf,
    email: email,
  };

  try {    
    return { status: true, body: body };
  } catch (error) {
    if (error.response) {
      return {
        status: false,
        message: `Ops, ocorreu um erro. Tente novamente!`,
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

