const API_KEY = "AIzaSyBy4WUVwSIifzk6RuHX_Miahq0UZB59Jfo";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  API_KEY;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=videoId&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=searchQuery&type=video&key=" +
  API_KEY;

export const YOUTUBE_IMG =
  "data:image/png;base64,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";

export const MENU_IMG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg==";

export const USER_IMG =
  "data:image/png;base64,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";