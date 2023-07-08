import { supabaseServer } from "./supabaseServer";

export default function generateSimpleId() {
    var idExists: boolean = true;
    var simpleId: string = "";
    while (idExists) {
        idExists = false;
        simpleId = Math.random().toString(36).substr(2, 8).toLowerCase()
        supabaseServer.from('potential_question').select('id').eq('id', simpleId).then((result) => {if (result.data && result.data.length > 0) {idExists = true;}})
        supabaseServer.from('question').select('id').eq('id', simpleId).then((result) => {if (result.data && result.data.length > 0) {idExists = true;}})
        supabaseServer.from('users').select('id').eq('id', simpleId).then((result) => {if (result.data && result.data.length > 0) {idExists = true;}})
        supabaseServer.from('paper').select('id').eq('id', simpleId).then((result) => {if (result.data && result.data.length > 0) {idExists = true;}})
    }
    return simpleId;
}