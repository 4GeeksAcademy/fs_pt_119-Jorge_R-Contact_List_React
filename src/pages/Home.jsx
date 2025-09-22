
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from "react";

export const Home = () => {

	const [lista, setLista] = useState([])
	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {

		console.log("Funcion del useEffect llamada");

		obtenerContactos();
		agregaUsuario();
	}, [])

	function obtenerContactos() {

		fetch('https://playground.4geeks.com/contact/agendas/JorgeCKR/contacts')

			.then(resp => {
				console.log(resp);
				return resp.json();
			})
			.then(data => {

				console.log(data.contacts);
				setLista(data.contacts)
			})

			.catch(error => {
				console.log(error);
			});
	}

	function agregaUsuario() {

		fetch('https://playground.4geeks.com/contact/agendas/JorgeCKR', {
			method: 'POST',
			headers: {
				'Content-Type': "application/json"
			}
		})
			.then(resp => {
				console.log(resp);
				return resp.json();
			})
			.then(data => {

				console.log(data);
				obtenerContactos();
			})
			.catch(error => {

				console.log(error);
			});
	}


	return (
		<>
			{lista.length === 0 ? (
				<div className="Centrado alert alert-danger" role="alert">
					No hay Contactos en tu Agenda... Pincha el boton Verde para agregar tu primer contacto
				</div>
			) : (
				lista.map((item) => (
					<div
						className="card mb-3 mx-3"
						key={item.id}>
						<div className="row g-0">
							<div className="col-md-2">
								<img
									src="https://picsum.photos/200"
									className="FotoContacto img-fluid m-3"
									alt="Imagen de contacto aleatoria"
								/>
							</div>
							<div className="col-md-9">
								<div className="card-body p-3">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text"><i className="fa-solid fa-location-dot"></i>&nbsp;{item.address}</p>
									<p className="card-text"><i className="fa-solid fa-phone-flip"></i>  {item.phone}</p>
									<p className="card-text"><i className="fa-solid fa-envelope"></i>  {item.email}</p>
								</div>
							</div>
							<div className="col-auto d-flex align-items-center gap-2">
								<button className="btn btn-sm" type="button"><i className="fa-solid fa-pen"></i></button>
								<button className="btn btn-sm" type="button"><i className="fa-solid fa-trash-can"></i></button>
							</div>
						</div>
					</div>
				))
			)}
		</>
	);
}; 