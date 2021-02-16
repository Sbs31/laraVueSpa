    <?php

    /*
    --------------------------------------------------------------------
| Broadcast Channels
|----------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels tyour
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/
Broadcast::channel('newTK', function(){
    return true;
});
Broadcast::channel('TKRemoved', function(){
    return true;
});