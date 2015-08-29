angular.module("rtfmApp").service("threadService", function($firebaseArray, fb){
    var data = {
        "threads": [
            {
                "title": "A new thread!",
                "username": "Scott",                
                "comments": [
                    {
                        "text": "This is the best title I have ever seen for a thread",
                        "username": "Phil"
                    },
                    {
                        "text": "I know right?",
                        "username": "Joe Somebody"
                    }
                ]
            },
            {
                "title": "Another thread",
                "username": "Joe Somebody",
                "comments": []
            },
            {
                "title": "Yet another thread",
                "username": "Phil",
                "comments": []
            }
        ]
    }    

    this.getAllThreads = function(){
        var ref = new Firebase(fb.url);
        return $firebaseArray(ref);
    };

    this.getThread = function(threadId){
         for(var i = 0; i < data.threads.length; i++){
             if(i === threadId){
                 return data.threads[i]
             }
         }
    };
});