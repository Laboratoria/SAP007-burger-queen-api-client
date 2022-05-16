import React from 'react';
import Button from '../../components/button/button.js';
import Input from '../../components/input/input.js';
import errorsMessages from '../register/register-valid';
import { register } from "../../services/api-auth.js";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import ModalErrors from "../../components/modal/modal-errors";

