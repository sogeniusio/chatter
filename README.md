# Laravel Forum Package - Chatter (MOD)

I forked to use for my own use case and will maintain as I see fit. This is a public package to be **used at your own risk**. 

### Dependencies

Be sure to install the following packages before installing this one.

1. [Laravel Popular](https://github.com/jordanmiguel/laravel-popular) - A Laravel package for tracking popular entries(by Models) of a website in a certain time.

2. [Laravel Favorites](https://github.com/ChristianKuri/laravel-favorite) - Allows Laravel Eloquent models to implement a 'favorite' or 'remember' or 'follow' feature. (See requirements)

### Original Package

Follow the releases of [Devdojo/Chatter](https://github.com/thedevdojo/chatter).

#### Laravel Favorites
Your User model should import the Traits/Favoriteability.php trait and use it, that trait allows the user to favorite the models. (see an example below):
```
use ChristianKuri\LaravelFavorite\Traits\Favoriteability;

class User extends Authenticatable
{
	use Favoriteability;
}
```
