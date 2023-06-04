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
      favourite_anime: {
        Row: {
          createdAt: string | null
          description: string | null
          id: number
          isCool: boolean | null
          selectedAnime: Json | null
          user_id: string | null
        }
        Insert: {
          createdAt?: string | null
          description?: string | null
          id?: number
          isCool?: boolean | null
          selectedAnime?: Json | null
          user_id?: string | null
        }
        Update: {
          createdAt?: string | null
          description?: string | null
          id?: number
          isCool?: boolean | null
          selectedAnime?: Json | null
          user_id?: string | null
        }
        Relationships: []
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

