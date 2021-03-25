
const path1 = "getWallet";
const path2 = "addPreConsume";
const path3 = "addWaterConsume";


let obj = $response.body;

if ($request.url.indexOf(path1) != -1){
obj="FRaS30PNLKXMbP7UuTvxCuWcPBrTadtmLhRGGPSEwo2ZQXpL+1wLa3RhzaZ0Wfe7K/TIGvl07PrCeQ3QGELRvguAMGswUNz86N9UGSgeEVQ5Erd1WVanqBhAL5TPyW40BgG2GOuAQH5X0n25Of+ROh+GbVdDbESdEF4hqTuKSA3zMH8iGJe73dOfi40TwB5XU22aHN5/vsaVJOp+bSYX8cJ5DdAYQtG+C4AwazBQ3PyYXfNDbNHLAVHuzrsfHV8vDSsACpxG01ucGnWXOzrZj60X1iTJf8Ft7fln6m8TtLw="
}
if ($request.url.indexOf(path2) != -1){
obj = 'FRaS30PNLKXMbP7UuTvxCuWcPBrTadtmLhRGGPSEwo1Z72kWFgAPnhze+KfishWCCz8WMfj02a/lyvZAZaMxpBlzHO9O95A+y/i46KiQfheTwO/kUTOLlt6YnVhrNenHQKAj4OacGOEJa5qPIE2kHzNzMYj568MghSuZ4xVwMcib1RUWZqfRvZ3x1sVrKAfZczINJV3KHju0H6qo0k9A0bHDw2hpo0/Uj3AKqDvQ8PYTL8LSmjC4wi291Phqi0QC'
}
if ($request.url.indexOf(path3) != -1){
obj = 'FRaS30PNLKXMbP7UuTvxCl8nXoIX75vY05qERbdxRwy2yh1bMSBqnf65WbfUZC/L'
}
$done(obj);


