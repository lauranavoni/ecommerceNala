import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Contacto</h1>
                        <h2>¿Tenes alguna inquietud? Dejanos tu consulta.</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                    <img src="/assets/contacto-5.png" alt="Contact Us" height="350px" width="px" />  
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Nombre(Requerido)"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Escribir Mensaje</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Enviar Mensaje</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact