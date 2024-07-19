import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Select from 'react-select';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import AuthService from './service/authService';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const options = [
  { value: 'English', label: 'English' },
  { value: 'Tamil', label: 'Tamil' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Russian', label: 'Russian' },
  { value: 'German', label: 'German' },
  { value: "Arabic", label: "Arabic" },
  { value: "Maldivian", label: "Maldivian" },
  { value: "Greek", label: "Greek" },
  { value: "Hungarian", label: "Hungarian" },
  { value: "Spanish", label: "Spanish" },
  { value: "Estonian", label: "Estonian" },
  { value: "Basque", label: "Basque" },
  { value: "Persian", label: 'Persian' },
  { value: "Finnish", label: 'Finnish' },
  { value: "Fanagalo", label: 'Fanagalo' },
  { value: "Faroese", label: 'Faroese' },
  { value: "French", label: 'French' },
  { value: "Galician", label: 'Galician' },
  { value: "Gujarati", label: 'Gujarati' },
  { value: "Indonesian", label: 'Indonesian' },
  { value: "Icelandic", label: 'Icelandic' },
  { value: "Italian", label: 'Italian' },
  { value: "Japanese", label: 'Japanese' },
  { value: "Kazakh", label: 'Kazakh' },
  { value: "Khmer", label: 'Khmer' },
  { value: "Kannada", label: 'Kannada' },
  { value: "Korean", label: 'Korean' },
  { value: "Kurdish", label: 'Kurdish' },
  { value: "Kyrgyz", label: 'Kyrgyz' },
  { value: "Latin", label: 'Latin' },
  { value: "Lao", label: 'Lao' },
  { value: "Latvian", label: 'Latvian' },
  { value: "Mende", label: 'Mende' },
  { value: "Malagasy", label: 'Malagasy' },
  { value: "Maori", label: 'Maori' },
  { value: "Malay", label: 'Malay' },
  { value: "Maltese", label: 'Maltese' },
  { value: "Burmese", label: 'Burmese' },
  { value: "Nepali", label: 'Nepali' },
  { value: "Niuean", label: 'Niuean' },
  { value: "Dutch", label: 'Dutch' },
  { value: "Norwegian", label: 'Norwegian' },
  { value: "Nyanja", label: 'Nyanja' },
  { value: "Pakistani", label: 'Pakistani' },
  { value: "Palauan", label: 'Palauan' },
  { value: "Panjabi", label: 'Panjabi' },
  { value: "Pashto", label: 'Pashto' },
  { value: "Pijin", label: 'Pijin' },
  { value: "Polish", label: 'Polish' },
  { value: "Portuguese", label: 'Portuguese' },
  { value: "Kirundi", label: 'Kirundi' },
  { value: "Romanian", label: 'Romanian' },
  { value: "Russian", label: 'Russian' },
  { value: "Sango", label: 'Sango' },
  { value: "Sinhala", label: 'Sinhala' },
  { value: "Slovak", label: 'Slovak' },
  { value: "Samoan", label: 'Samoan' },
  { value: "Shona", label: 'Shona' },
  { value: "Somali", label: 'Somali' },
  { value: "Albanian", label: 'Albanian' },
  { value: "Serbian", label: 'Serbian' },
  { value: "Swedish", label: 'Swedish' },
  { value: "Swahili", label: 'Swahili' },
  { value: "Telugu", label: 'Telugu' },
  { value: "Tetum", label: 'Tetum' },
  { value: "Tajik", label: 'Tajik' },
  { value: "Thai", label: 'Thai' },
  { value: "Tigrinya", label: 'Tigrinya' },
  { value: "Turkmen", label: 'Turkmen' },
  { value: "Tagalog", label: 'Tagalog' },
  { value: "Tswana", label: 'Tswana' },
  { value: "Tongan", label: 'Tongan' },
  { value: "Turkish", label: 'Turkish' },
  { value: "Ukrainian", label: 'Ukrainian' },
  { value: "Uzbek", label: 'Uzbek' },
  { value: "Vietnamese", label: 'Vietnamese' },
  { value: "Wolof", label: 'Wolof' },
  { value: "Xhosa", label: 'Xhosa' },
  { value: "Yiddish", label: 'Yiddish' },
  { value: "Zulu", label: 'Zulu' },
]


const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {

  const { control, handleSubmit, register, formState: { errors } } = useForm();

  const [submitResponse, setSubmitResponse] = useState()
  const [backdrop, setBackDrop] = useState(false)

  const formData = (data) => {
    setBackDrop(true)
    console.log("Callback function when form is submitted!", data);
    const Data = {
      'text': data.fromText,
      'target_language': data.targetLanguage.value
    }
    console.log("formdata", Data);
    AuthService.Translate(Data).then(
      (Response) => {
        console.log("response", Response.data.translated_text)
        setSubmitResponse(Response.data.translated_text)
        setBackDrop(false)
      }
    )
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 580,
              height: 630,
            },
          }}
        >
          <Paper elevation={6} >
            <Box component="form" onSubmit={handleSubmit(formData)}>
              <Grid container spacing={0} sx={{ padding: 3 }} >
                <Grid item sx={{ marginBottom: 2 }} xs={12}>
                  <Typography variant="h5">
                    Language Translator
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" variant="outlined" fullWidth multiline rows={8} label="Enter the text to translate"
                    {...register('fromText')}
                    error={!!errors.fromText}
                    helperText={errors.fromText?.message}
                  />
                </Grid>
                <Grid xs={12} item>
                  <Controller
                    name="targetLanguage"
                    control={control}
                    defaultValue={options[0]} // Set your default value here
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={options}
                        isClearable={true}
                        isSearchable={true}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sx={{
                  border: 1,
                  borderColor: 'rgba(0, 0, 0, 0.38)',
                  padding: 2,

                }}>
                  <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={backdrop}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                  <Typography sx={{ textAlign: 'left', overflow: 'auto', height: 190 }}>
                    {submitResponse}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit" id="myForm" fullWidth sx={{ marginTop: 2 }} size='large'>Translate it</Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </div>
    </ThemeProvider >
  );
}

export default App;
