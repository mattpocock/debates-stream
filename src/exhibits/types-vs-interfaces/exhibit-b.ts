// Using interfaces is dangerous!

interface Window { // <- no error
    hello?: string
}

const myWindow: Window = { // <- bad error "missing properties"???
    
}


/// Difference when using types

type Document = { // <- good error at type "duplicate identifier"
    hello?: string
}

const myDocument: Document = {

}
