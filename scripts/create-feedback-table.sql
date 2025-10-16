-- Create feedback table for storing user feedback
CREATE TABLE IF NOT EXISTS feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  feedback_type VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  page_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at DESC);

-- Create index on feedback_type for filtering
CREATE INDEX IF NOT EXISTS idx_feedback_type ON feedback(feedback_type);
