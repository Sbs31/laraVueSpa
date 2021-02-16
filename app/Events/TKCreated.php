<?php

namespace App\Events;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;


class TaskCreated implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

        /**
        * Create a new event instance.
        *
        * @param $task
        * @return void
        */

        public $TK;
        public function __construct($TK)
        {
            //
            $this->TK = $TK;
        }

        /**
        * Get the channels the event should broadcast on.
        *
        * @return \Illuminate\Broadcasting\Channel|array
        */

        public function broadcastOn()
        {
            return new Channel('newTK');
        }

        public function broadcastAs(){
            return 'tk-created';
        }

    }