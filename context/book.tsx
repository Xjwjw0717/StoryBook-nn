"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface BookContextType {
  bookId: string | null
  setBookId: (bookId: string | null) => void
}

const BookContext = createContext<BookContextType>({
  bookId: null,
  setBookId: () => {},
})

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookId, setBookId] = useState<string | null>(null)

  return <BookContext.Provider value={{ bookId, setBookId }}>{children}</BookContext.Provider>
}

export const useBook = () => useContext(BookContext)
