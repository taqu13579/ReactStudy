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

const useStyle = makeStyles((theme) => ({
    taskTime: {
        fontSize: '8px'
    }
}));

type Task = {
    docId: string;
    taskText: string;
    timeStamp: string;
};

function TaskManagement() {
    const classes = useStyle();
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState<string>('');
    const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false);
    const [deleteDocId, setDeleteDocId] = useState<string>('');
    
    const dispData = () => {
        const taskCollectionRef = collection(db, 'tTasks');
        getDocs(taskCollectionRef).then((querySnapshot) => {
            const userList: Task[] = [];
            let count: number = 0;
            querySnapshot.docs.map((doc, index) => {
                const task: Task = {
                    docId: doc.id,
                    taskText: doc.data().taskText,
                    timeStamp: doc.data({serverTimestamps: "estimate"}).timeStamp,
                };
                userList.push(task);
                count += 1;
            });
            setTaskList(userList);
        });
    };

    const addTask = (inputText: string) => {
        if (inputText === '') {
            return;
        }
        const tasksCollectinRef = collection(db, 'tTasks');
        const nowTime = new Date();
        const nowYear = nowTime.getFullYear();
        const nowMonth = nowTime.getMonth();
        const nowDay = nowTime.getDay();
        const nowHour = nowTime.getHours();
        const nowMin = nowTime.getMinutes();
        const nowSec = nowTime.getSeconds();
        const documentRef = addDoc(tasksCollectinRef, {
            taskText: inputText,
            timeStamp: `${nowYear}/${nowMonth}/${nowDay} ${nowHour}:${nowMin}:${nowSec}`,
        });
        setTaskText('');
        dispData();
    };

    const deleteTaskConfirm = (docId: string) => {
        setDeleteDocId(docId);
        setIsOpenDeleteConfirm(true);
    };

    const deleteTask = async() => {
        setIsOpenDeleteConfirm(false);
        const userDocumentRef = doc(db, 'tTasks', deleteDocId);
        await deleteDoc(userDocumentRef);
        dispData();
    };

    const changeTaskChecked = (blnChecked: boolean, numIndex: number) => {
        if (blnChecked === true) {
            const taskText = document.getElementById(`taskText${numIndex}`);
            if (taskText !== null) {
                taskText.style.color = '#FF0000';
            };
        } else {
            const taskText = document.getElementById(`taskText${numIndex}`);
            if (taskText !== null) {
                taskText.style.color = '#000000';
            };
        };
    };

    useEffect(() => {
        dispData();
    }, []);

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}