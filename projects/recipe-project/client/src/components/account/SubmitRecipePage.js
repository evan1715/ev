import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import recipeServerAPI from '../../database/recipeServerAPI.js';
import RecipeForm from './RecipeForm.js';

const SubmitRecipe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRecipe = useSelector((state) => state.userRecipesReducer);
    const [approvePush, setApprovePush] = useState(false);

    useEffect(() => {
        if (approvePush) {
            navigate('/myrecipes');
        }
    }, [userRecipe]);

    return (
        <div>
            <h1 className="title center">Submit a recipe</h1>
            <RecipeForm
                onSubmit={(config) => {
                    dispatch(recipeServerAPI('submitRecipe', config));
                    setApprovePush(true);
                }}
            />
        </div>
    );
};

export { SubmitRecipe as default };
