package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServerMux()
	mux.HandleFunc("GET /{$}", home)
	mux.HandleFunc("GET /snippet/view/{id}", snippetView)
	mux.HandleFunc("GET /snippet/create", snippetCreate)
	mux.HandleFunc("POST /snippet/create", snippetCreatePost)
	log.Print("Server running on a :4000")
	err := http.ListenAndServe(":4000", mux)
	log.Fatal(err)
}
