package main

import (
	"fmt"
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Displaying a home page..."))
}

func snippetView(w http.ResponseWriter, r *http.Request) {
	snippetID := r.PathValue("snippetID")
	w.Write([]byte(fmt.Sprint("Displaying a specific snippet of ", snippetID)))
}

func snippetCreate(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Displaying a form for creating a snippet"))
}

func main() {
	// initializing mux as the server
	mux := http.NewServeMux()
	mux.HandleFunc("/{$}", home)
	mux.HandleFunc("/snippet/view/{snippetID}", snippetView)
	mux.HandleFunc("/snippet/create/", snippetCreate)
	// print a log message to say that the server is runnning
	log.Print("Starting server on :4000")

	err := http.ListenAndServe(":4000", mux)
	log.Fatal(err)
}
