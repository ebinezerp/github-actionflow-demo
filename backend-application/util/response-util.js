exports.generateResponse = (status,error,result) => {
    return {
        status: status,
        error: error,
        result: result
    }
}