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
      customerInquiryList: {
        Row: {
          content: string;
          created_at: string;
          email: string;
          id: number;
          isProcessed: boolean;
        };
        Insert: {
          content: string;
          created_at?: string;
          email: string;
          id?: number;
          isProcessed?: boolean;
        };
        Update: {
          content?: string;
          created_at?: string;
          email?: string;
          id?: number;
          isProcessed?: boolean;
        };
      };
      finalList: {
        Row: {
          created_at: string;
          descriptionExplanation: string;
          id: number;
          mainTitle: string;
          maxRange: number;
          quizId: number;
        };
        Insert: {
          created_at?: string;
          descriptionExplanation: string;
          id?: number;
          mainTitle: string;
          maxRange: number;
          quizId: number;
        };
        Update: {
          created_at?: string;
          descriptionExplanation?: string;
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
          descriptionImageUrl: string | null;
          id: number;
          quizId: number;
          solutionExplanation: string;
          solutionImageUrl: string | null;
          step: number;
          title: string;
        };
        Insert: {
          answerValue: boolean;
          created_at?: string;
          descriptionExplanation: string;
          descriptionImageUrl?: string | null;
          id?: number;
          quizId: number;
          solutionExplanation: string;
          solutionImageUrl?: string | null;
          step: number;
          title: string;
        };
        Update: {
          answerValue?: boolean;
          created_at?: string;
          descriptionExplanation?: string;
          descriptionImageUrl?: string | null;
          id?: number;
          quizId?: number;
          solutionExplanation?: string;
          solutionImageUrl?: string | null;
          step?: number;
          title?: string;
        };
      };
      quizList: {
        Row: {
          averageAnswerCount: number;
          created_at: string;
          description: string;
          id: number;
          name: string;
          participationCount: number;
          questionCount: number;
          thumbnailImageUrl: string;
        };
        Insert: {
          averageAnswerCount?: number;
          created_at?: string;
          description: string;
          id?: number;
          name: string;
          participationCount?: number;
          questionCount?: number;
          thumbnailImageUrl: string;
        };
        Update: {
          averageAnswerCount?: number;
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
