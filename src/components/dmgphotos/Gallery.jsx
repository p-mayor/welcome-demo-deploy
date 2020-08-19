import React from "react"
// import getGallery from "../FlickrService/FlickrService"
class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: props.searchTerm,
            latitude: props.latitude,
            longitude: props.longitude,
            photoSrc: "",
            photoAlt: "",
        }
    }
    componentDidMount() {
        const perPage = 1
        const CORSProxy = "https://shrouded-mountain-15003.herokuapp.com/"
        const baseUrl = "https://flickr.com/services/rest/?"
        const url = `${CORSProxy}${baseUrl}api_key=312e305e7062fdb7eb699961353a06bd&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1` +
            `&per_page=${perPage}` + `&lat=${this.props.latitude}` + `&lon=${this.props.longitude}` + `&text=dog`
        fetch(url).then(response => response.json()).then(payload => {
            const photoObj = payload.photos.photo[0]
            this.setState({
                photoSrc: this.constructImageURL(photoObj),
                photoAlt: photoObj.title,
            })
        })
    }
    constructImageURL(photoObj) {
        return (
            "https://farm" +
            photoObj.farm +
            ".staticflickr.com/" +
            photoObj.server +
            "/" +
            photoObj.id +
            "_" +
            photoObj.secret +
            ".jpg"
        )
    }
    render() {
        console.log(this.state)
        return (
            <div className="Gallery">
                <img src={this.state.photoSrc} alt={this.state.photoAlt} />
            </div>
        )
    }
}
export default Gallery