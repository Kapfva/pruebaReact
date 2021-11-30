import React from 'react';




const ContactCard = () => {
	return (
		<div>
			<form>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label for="headerMail">Encabezado</label>
						<input
							type="email"
							className="form-control"
							id="headerMail"
							placeholder="Encabezado"
						/>
					</div>
                    <div className="form-group col-md-6">
						<label for="subject">Asunto</label>
						<input
							type="password"
							className="form-control"
							id="subject"
							placeholder="Asunto"
						/>
					</div>
					<div class="form-group">
						<label for="msj">Mensaje</label>
						<textarea
							class="form-control"
							id="msj"
							rows="4"
						></textarea>
					</div>
					
				</div>
				<div className="form-group">
					<label for="inputAddress">Address</label>
					<input
						type="text"
						className="form-control"
						id="inputAddress"
						placeholder="correo de destino"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Enviar
				</button>
			</form>
		</div>
	);
};

export default ContactCard;
