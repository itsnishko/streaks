param principalId string

module roles 'roles.bicep' = {
  name: 'rolesModule'
  params: {
    roleName: 'customRole'
  }
}

resource roleAssignment 'Microsoft.Authorization/roleAssignments@2020-04-01-preview' = {
  name: guid(subscription().id, principalId, roles.outputs.customRoleId)
  properties: { 
    roleDefinitionId: roles.outputs.customRoleId
    principalId: principalId
  }
}
