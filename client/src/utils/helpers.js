module.exports = {
    body_email : (email, sub, visitante, motivo, idVisita) =>{
        console.log('url env', process.env.URL_SENDMAIL);
        const urlAcceso = process.env.URL_ACCESO || 'http://localhost:3000/acceso'
        const message = `
        <h3>Solicitud de acceso de : ${visitante} <br>
        <h3>Motivo : ${motivo} <br>
        
        <p>Permitir: <a href='${urlAcceso}/${idVisita}/1'>PERMITIR</a></p>
        <p>Denegar: <a href='${urlAcceso}/${idVisita}/2'>DENEGAR</a></p>

        <br>
        <p style="font-size:8pt;line-height:10pt;font-family:&#39;Cambria&#39;,&#39;times roman&#39;,serif">
        El presente mensaje es confidencial, dirigido únicamente para el destinatario. Si usted no es el destinatario, no deberá copiarlo, revelarlo o distribuirlo. Cualquier acción realizada en este sentido, será ilegal. Si por error recibe el presente mensaje, deberá
        destruirlo y notificar al remitente. 
        This communication is confidential and intended only for the addressee. If you are not the intended recipient, you may not copy, disclose, or distribute this message to anyone else; any such actions may be unlawful. If
        you have received this communication in error, you must destroy this message and contact the sender of the message to inform him or her of the error.
        </p>        

        `
        const payload = JSON.stringify(
                    {
                    "email":email,
                    "sub":sub,
                    "msg":message
                    }        
                    );
        return payload;
    }
};