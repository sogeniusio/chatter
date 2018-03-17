# Laravel Forum Package - Chatter (MOD)

I forked to use for my own use case and will maintain as I see fit. This is a public package to be **used at your own risk**. 

## Index

- [Dependencies](#dependencies)
	- [Laravel Popular](#popular)
    - [Laravel Favorite](#favorite)
	- [Laravel Pointable](#pointable)
    - [Laravel Likeable Plugin](#likeable)
- [Security](#security)

## Dependencies

Be sure to install the following packages before installing this one.

1. [Laravel Popular](https://github.com/jordanmiguel/laravel-popular) - A Laravel package for tracking popular entries(by Models) of a website in a certain time. [Jump](#popular)

2. [Laravel Favorites](https://github.com/ChristianKuri/laravel-favorite) - Allows Laravel Eloquent models to implement a 'favorite' or 'remember' or 'follow' feature. [Jump](#favorite)

3. [Laravel Pointable](https://github.com/Trexology/laravel-pointable) - Point Transaction system for laravel 5.  [Jump](#pointable)

4. [Laravel Likeable Plugin](https://github.com/rtconner/laravel-likeable) - Trait for Laravel Eloquent models to allow easy implementation of a "like" or "favorite" or "remember" feature.  [Jump](#likeable)

### Popular

Use the visitable trait on the model you intend to track

```php
use \JordanMiguel\LaravelPopular\Traits\Visitable;

class Post extends Model
{
    use Visitable;

    ...
}
```

### Favorite
Your User model should import the Traits/Favoriteability.php trait and use it, that trait allows the user to favorite the models. (see an example below):

```php
use ChristianKuri\LaravelFavorite\Traits\Favoriteability;

class User extends Authenticatable
{
	use Favoriteability;
}
```

### Pointable

Point Transaction system for laravel 5

#### Setup User Model

```php
<?php

namespace App;

use Trexology\Pointable\Contracts\Pointable;
use Trexology\Pointable\Traits\Pointable as PointableTrait;
use Illuminate\Database\Eloquent\Model;

class User extends Model implements Pointable
{
    use PointableTrait;
}
```

### Likeable

#### Composer Install (for Laravel 5)

    composer require rtconner/laravel-likeable "~1.2"

#### Install and then run the migrations

```php
'providers' => [
    \Conner\Likeable\LikeableServiceProvider::class,
],
```

```bash
php artisan vendor:publish --provider="Conner\Likeable\LikeableServiceProvider" --tag=migrations
php artisan migrate
```

#### Setup your models

```php
class Article extends \Illuminate\Database\Eloquent\Model {
    use \Conner\Likeable\Likeable;
}
```

## Security

Please report any issue you find in the issues page.  
Pull requests are welcome.
