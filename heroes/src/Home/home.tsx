import React from 'react';
import { Film } from './film';
import './home.css';
import SearchBar from './searchBar/searchBar';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';

interface HomeState {
    loading: boolean,
    searchText: string,
    film: Film,
}

export default class Home extends React.Component<any, HomeState> {


    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
            film: {} as Film,
            searchText: "",
        } as HomeState;



    }

    async componentDidMount() {
        await this.load("");
    }

    async load(search: string) {
        let baseURL = `http://www.omdbapi.com/?apikey=f12ba140&t=${search}`;
        let response = await fetch(baseURL);

        let data = await response.json() as Film;
        this.setState({ film: data, loading: false })
        console.log(data);
    }

    onClick = async (search: string) => await this.load(search);



    render() {
        let peli = this.state.film;
        return (
            <div>
                <h1 className="homeTitle">Home!</h1>
                <SearchBar onClick={this.onClick} />
                {this.state.loading || !peli || peli.Title === undefined ?
                    <div>No data, please search something!</div>
                    :
                    <div className="cardContainer">
                        <div className="card">
                            <img src={peli.Poster} alt="Avatar" />
                            <div className="container">
                                <h4><b>{peli.Title + " - " + peli.Year}</b></h4>
                                <p>{peli.Plot}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>

        )
    }
}
