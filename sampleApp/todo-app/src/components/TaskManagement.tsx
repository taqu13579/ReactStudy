import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDocs, addDoc, collection, deleteDoc } from 'firebase/firestore';
import { Button, TextField, Checkbox } from '@mui/material';
import {
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    makeStyles
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

