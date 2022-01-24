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
import { useTranslation } from "react-i18next"
import _ from "lodash"

const defaultVals = {
  name: "",
  phoneNumber: "",
  address: "",
}

export default function AddAddressAlertDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const methods = useForm({
    defaultValues: defaultVals,
    resolver: yupResolver(schema),
    mode: "onBlur",
  })
  const cancelRef = React.useRef()
  const { t } = useTranslation()

  const onClose = useCallback(() => setIsOpen(false), [setIsOpen])

  const onOpen = useCallback(() => setIsOpen(true), [setIsOpen])

  const onCloseAndSubmit = useCallback(() => {
    if (_.isEmpty(methods.formState.errors)) {
      onClose()
    }
  })

  const onSubmit = useCallback(() => {
    methods.reset(defaultVals)
  }, [])

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        variant={"outline"}
        colorScheme={"teal"}
        onClick={onOpen}
      >
        {t("deliveryAddr.addAddress")}
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("deliveryAddr.newAddress")}
            </AlertDialogHeader>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <AlertDialogBody>
                  <AddDeliveryAddressForm />
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    {t("deliveryAddr.backBtn")}
                  </Button>
                  <Button
                    colorScheme="teal"
                    onClick={onCloseAndSubmit}
                    ml={3}
                    type={"submit"}
                  >
                    {t("deliveryAddr.doneBtn")}
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
