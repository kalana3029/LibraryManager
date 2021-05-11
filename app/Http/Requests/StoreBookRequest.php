<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class StoreBookRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'book.category_id' => 'required|present',
            'book.isbn' => 'required|present',
            'book.title' => 'required|present',
            'book.author' => 'required|present',
            'book.price' => 'required|present',
            'book.availbility' => 'required|present|boolean',
        ];
    }

    /**
     * format failed validation
     * 
     * @param Validator $validator
     * @throws ValidationException
     */
    public function failedValidation(Validator $validator)
    {
        throw new ValidationException($validator, response()->error($validator->errors()->first()));
    }

}
