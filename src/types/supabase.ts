export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      finalList: {
        Row: {
          created_at: string;
          descriptionExplanation: string;
          descriptionImageUrl: string;
          id: number;
          mainTitle: string;
          maxRange: number;
          quizId: number;
        };
        Insert: {
          created_at?: string;
          descriptionExplanation: string;
          descriptionImageUrl: string;
          id?: number;
          mainTitle: string;
          maxRange: number;
          quizId: number;
        };
        Update: {
          created_at?: string;
          descriptionExplanation?: string;
          descriptionImageUrl?: string;
          id?: number;
          mainTitle?: string;
          maxRange?: number;
          quizId?: number;
        };
      };
      mainList: {
        Row: {
          answerValue: boolean;
          created_at: string;
          descriptionExplanation: string;
          descriptionImageUrl: string;
          id: number;
          quizId: number;
          solutionExplanation: string;
          solutionImageUrl: string;
          step: number;
          title: string;
        };
        Insert: {
          answerValue: boolean;
          created_at?: string;
          descriptionExplanation: string;
          descriptionImageUrl: string;
          id?: number;
          quizId: number;
          solutionExplanation: string;
          solutionImageUrl: string;
          step: number;
          title: string;
        };
        Update: {
          answerValue?: boolean;
          created_at?: string;
          descriptionExplanation?: string;
          descriptionImageUrl?: string;
          id?: number;
          quizId?: number;
          solutionExplanation?: string;
          solutionImageUrl?: string;
          step?: number;
          title?: string;
        };
      };
      quizList: {
        Row: {
          created_at: string;
          description: string;
          id: number;
          name: string;
          participationCount: number;
          questionCount: number;
          thumbnailImageUrl: string;
        };
        Insert: {
          created_at?: string;
          description: string;
          id?: number;
          name: string;
          participationCount?: number;
          questionCount?: number;
          thumbnailImageUrl: string;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: number;
          name?: string;
          participationCount?: number;
          questionCount?: number;
          thumbnailImageUrl?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
