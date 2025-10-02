class Dato {
	constructor(descripcion, valor) {
		this._descripcion = descripcion;
		this._valor = valor;
	}

	// Getter y setter para descripción
	get descripcion() {
		return this._descripcion;
	}

	set descripcion(descripcion) {
		this._descripcion = descripcion;
	}

	// Getter y setter para valor
	set valor(valor) {
		this._valor = valor;
	}

	get valor() {
		return this._valor;
	}
}
