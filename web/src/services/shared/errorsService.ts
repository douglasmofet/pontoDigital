const handleErrors = (error: any) => {
    console.error(error);

    const message = error.response
                    ? error.response.data.message
                    : 'OCORREU UM ERRO INESPERADO! Entre em contato com o suporte.';

    if (message)
        alert(`ERRO: ${message}`);

    return null;   
}

export default handleErrors;