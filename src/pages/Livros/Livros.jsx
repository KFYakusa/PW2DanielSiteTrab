import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TabelaLivros from './TabelaLivros'
import FormBook from '../../Components/FormBook/FormBook'
import useLocalStorage from '../../hooks/useLocalStorage'

const Livros = (props) => {

	const [listaLivros, setListaLivros] = useLocalStorage('@app: listLivros')
	const [seqIdLivro, setSeqIdLivro] = useLocalStorage('@app: sequencia')

	


	useEffect(() => {
		if (!listaLivros) setListaLivros([])
		if (!seqIdLivro) setSeqIdLivro(0)
	}, [])


	// const [listaLivros, setListaLivros] = useState([
	//     // {id:1,nome:"livro1",autor:"ninguem",ano:2021},
	//     // {id:2,nome:"livro2",autor:"alguem",ano:2023},
	//     // {id:3,nome:"livro3",autor:"someone",ano:2010},
	//     // {id:4,nome:"livro4",autor:"nobody",ano:2012},
	//     // {id:5,nome:"livro5",autor:"anybody",ano:2015},
	//     // {id:6,nome:"livro6",autor:"somebody",ano:2016},
	// ])


	function remove(robject) {
		if (window.confirm("remover este livro?")) {
			setListaLivros(listaLivros.filter(l => l.id !== robject.id))
		}
	}

	function insert(brandNewBook) {
		brandNewBook.id = seqIdLivro + 1
		setSeqIdLivro(seqIdLivro + 1)
		const newList = [brandNewBook, ...listaLivros]
		setListaLivros(newList)
	}

	function edit(eobject) {
		let renewLivros = listaLivros.map((livro) => {
			if (livro.id === eobject.id)
				livro = eobject
			return livro;
		})
		setListaLivros(renewLivros)
	}

	return (

		<Router>
			<Switch>
				<Route exact path="/livros" render={() => <TabelaLivros remove={remove} liblist={listaLivros} />} />
				<Route exact path="/newLivro/" render={() => <FormBook newBook={insert} />} />
				<Route exact path="/editLivro/:id" render={LibProps => {
					const objeto = listaLivros.find(obj => obj.id === Number(LibProps.match.params.id))
					return <FormBook edit={edit} livro={objeto} />
				}} />
			</Switch>
		</Router>
	)
}

export default Livros