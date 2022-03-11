const jwt = require('jsonwebtoken');


                                                    //  Comprobamos que el token existe y es valido

let validToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, 'token-SEED', (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                message: 'No-auth-token'
            })
        }

        req.usuario = decoded.usuario;
        next();

    });

}

                                                    //  Verificar que el token no ha expirado

let checkToken = (req, res, next) => {  

    let token = req.get('token');

    jwt.verify(token, 'token-SEED', (err, decoded) => {

        if (err) {
            return res.send({
                ok: false,
                message: 'No-auth-token'
            })
        }

        next();

    });

}

module.exports = {
    validToken,
    checkToken
}