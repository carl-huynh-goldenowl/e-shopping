import React, { useCallback, useState } from "react"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import AddDeliveryAddressForm from "forms/AddDeliveryAddressForm"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "forms/AddDeliveryAddressForm/validation"

const defaultVals = {
  name: "",
  phoneNumber: "",
  address: "",
}

export default function AddAddressAlertDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExistError, setExistError] = useState(false)
  const methods = useForm({
    defaultValues: defaultVals,
    resolver: yupResolver(schema),
  })

  const cancelRef = React.useRef()

  const onClose = useCallback(() => setIsOpen(false), [setIsOpen])

  const onOpen = useCallback(() => setIsOpen(true), [setIsOpen])

  const onCloseAndSubmit = useCallback(() => {
    if (!isExistError) onClose()
  })

  const handleIsExistError = (status) => () => {
    setExistError(status)
  }

  const onSubmit = () => {
    methods.reset(defaultVals)
  }

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        variant={"outline"}
        colorScheme={"teal"}
        onClick={onOpen}
      >
        Thêm địa chỉ mới
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Địa chỉ mới
            </AlertDialogHeader>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <AlertDialogBody>
                  <AddDeliveryAddressForm
                    handleIsExistError={handleIsExistError}
                  />
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Trở lại
                  </Button>
                  <Button
                    colorScheme="teal"
                    onClick={onCloseAndSubmit}
                    ml={3}
                    type={"submit"}
                  >
                    Hoàn thành
                  </Button>
                </AlertDialogFooter>
              </form>
            </FormProvider>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
