import express from 'express'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

dotenv.config( { path : '.env' } );

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseApiKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseApiKey);

// Needed for express POST requests to parse a JSON req.body
app.use(express.json());

app.options(cors());
app.use(cors())

app.use(express.urlencoded({ extended: false}));

app.get('/journal-entries', async (req, res) => {
    try {

        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).send('User ID is required');
        }

        console.log(req.query.userId);
        const { data, error } = await supabase
            .from('journalEntries')
            .select('*')
            .eq('id', userId)
            .order('created_at', { ascending: false })
            .limit(10);

        if (error) {
            throw error;
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching journal entries');
    }
});

app.post('/add-journal-entry', async (req, res) => {
  const { userId, journalEntry, meditationRating, stressLevel } = req.body;

  try {
      const { data, error } = await supabase
          .from('journalEntries')
          .insert([
              { 
                  id: userId,
                  entry: journalEntry,
                  rating: meditationRating,
                  stressLevels: stressLevel,
              }
          ]);

      if (error) {
          throw error;
      }

      res.json(data);
  } catch (error) {
    console.error('Error:', error);
      res.status(500).send('Error adding journal entry');
  }
});

app.get('/quotes/:id', async (req, res) => {
  const quoteId = req.params.id;

  try {
      const { data, error } = await supabase
          .from('quotes')
          .select('*')
          .eq('id', quoteId)
          .single();

      if (error) throw error;

      res.json(data);
  } catch (error) {
      res.status(500).send('Error fetching quote: ' + error.message);
  }
});

app.listen(3002, () => {
    console.log('App is running')
  })