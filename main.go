package main

import (
	"log"
	"net/http"
)

// handler function:

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello from Sime!!!"))
}

func main() {
	// initializing mux as the server
	mux := http.NewServeMux()
	mux.HandleFunc("/", home)
	// print a log message to say that the server is runnning
	log.Print("Starting server on :4000")

	err := http.ListenAndServe(":4000", mux)
	log.Fatal(err)
}
