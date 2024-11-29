namespace HW1.BL
{
    public class Movie
    {
        int id;
        string title;
        double rating;
        int income;
        int releaseYear;
        int duration;
        string language;
        string description;
        string genre;
        string photoUrl;

        public static List<Movie> MoviesList = new List<Movie>();

        public int Id { get => id; set => id = value; }
        public string Title { get => title; set => title = value; }
        public double Rating { get => rating; set => rating = value; }
        public int Income { get => income; set => income = value; }
        public int ReleaseYear { get => releaseYear; set => releaseYear = value; }
        public int Duration { get => duration; set => duration = value; }
        public string Language { get => language; set => language = value; }
        public string Description { get => description; set => description = value; }
        public string Genre { get => genre; set => genre = value; }
        public string PhotoUrl { get => photoUrl; set => photoUrl = value; }

        public Movie() { }

        static public bool InsertMovie(Movie m)
        {
            try
            {
                for (int i = 0; i < MoviesList.Count; i++)
                    if (MoviesList[i].Id == m.Id)
                        return false;
                MoviesList.Add(m);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        static public Movie ReadOneMovie(int id)
        {
            for (int i = 0; i < MoviesList.Count; i++)
                if (MoviesList[i].Id == id)
                    return MoviesList[i];
            return null;
        }
        static public List<Movie> ReadMovie()
        {
            return MoviesList;
        }

        static public List<Movie> ReadByRating(double r)
        {
            List<Movie> ratingMovies = new List<Movie>();
            for (int i = 0; i < MoviesList.Count; i++)
            {
                if (MoviesList[i].rating >= r)
                {
                    ratingMovies.Add(MoviesList[i]);
                }
            }
            return ratingMovies;
        }

        static public List<Movie> ReadByDuratiokn(int duration)
        {
            List<Movie> durationList = new List<Movie>();
            for (int i = 0; i < MoviesList.Count; i++)
            {
                if (MoviesList[i].duration <= duration)
                {
                    durationList.Add(MoviesList[i]);
                }
            }

            return durationList;
        }

    }

}

