cd server
duplicate .env
run php artisan key:generate
run php artisan migrate
run php artisan serve

cd client
run npm run start
