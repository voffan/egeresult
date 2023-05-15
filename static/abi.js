let abi = [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "passport",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "subjectid",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "year",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "points",
						"type": "uint256"
					}
				],
				"name": "AddEditExamResult",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "passport",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "school",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fio",
						"type": "string"
					}
				],
				"name": "AddStudent",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "subject_name",
						"type": "string"
					}
				],
				"name": "AddSubject",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "passport",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "school",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fio",
						"type": "string"
					}
				],
				"name": "EditStudent",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "old_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "new_name",
						"type": "string"
					}
				],
				"name": "EditSubject",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "passport",
						"type": "string"
					}
				],
				"name": "GetStudent",
				"outputs": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "school",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "fio",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "exists",
								"type": "bool"
							}
						],
						"internalType": "struct Ege.Student",
						"name": "",
						"type": "tuple"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "passport",
						"type": "string"
					}
				],
				"name": "GetStudentResult",
				"outputs": [
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "subject",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "year",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "points",
								"type": "uint256"
							}
						],
						"internalType": "struct Ege.EgeResult[]",
						"name": "",
						"type": "tuple[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "GetSubjects",
				"outputs": [
					{
						"internalType": "string[]",
						"name": "",
						"type": "string[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		];