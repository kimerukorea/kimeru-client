export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      finalList: {
        Row: {
          created_at: string
          description: Json
          id: number
          maxRange: number
          quizId: number
        }
        Insert: {
          created_at?: string
          description: Json
          id?: number
          maxRange: number
          quizId: number
        }
        Update: {
          created_at?: string
          description?: Json
          id?: number
          maxRange?: number
          quizId?: number
        }
      }
      mainList: {
        Row: {
          answerValue: boolean
          created_at: string
          description: Json
          id: number
          quizId: number
          solution: Json
          step: number
          title: string
        }
        Insert: {
          answerValue: boolean
          created_at?: string
          description: Json
          id?: number
          quizId: number
          solution: Json
          step: number
          title: string
        }
        Update: {
          answerValue?: boolean
          created_at?: string
          description?: Json
          id?: number
          quizId?: number
          solution?: Json
          step?: number
          title?: string
        }
      }
      quizList: {
        Row: {
          created_at: string
          id: number
          name: string
          thumbnailImageUrl: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          thumbnailImageUrl: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          thumbnailImageUrl?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
